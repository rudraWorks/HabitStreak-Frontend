import React, { useEffect, useState } from 'react'
import { Container, Heading, AddImages, UploadImages, Submit, ImagesContainer, Img, ImgWrapper, Remove, Uploading, TextContainer, Stats } from './Styles'
import useUser from '../../hooks/useUser'
import { getTodaysEpoch } from '../../utils/utils'
import useModal from '../../hooks/useModal'
import useNotificationBar from '../../hooks/useNotificationBar'
import Message from '../../components/SuccessFailureMessageBox'
import axios from 'axios'

const MAX_TITLE_LENGTH = 100
const MAX_TEXT_LENGTH = 1000

function AddNote({edit, details, setDetails , setTitleArr, titleArr}) {
    const [uploadImages, setUploadImages] = useState(false)
    const [text, setText] = useState('')
    const [title,setTitle] = useState('')
    const { user } = useUser()
    const { dispatchModal } = useModal()
    const { dispatchNotificationBar } = useNotificationBar()
    const [error, setError] = useState('')
    const [file, setFile] = useState('')
    const [imagesArr, setImagesArr] = useState([])
    const [submitting,setSubmitting] = useState(false)

    const [uploading,setUploading] = useState(false)

    useEffect(() => {
        if(error)
            setError('')
        if (!file)
            return        
        if(file?.type.includes('image')===false)
            return setError('Invalid file type')
        if(file?.size>=3000000)
            return setError('Image too large, max size is 3mb')
        setUploading(true)
 
        async function fileHandler() {

            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/notes/image`,{
                method:'GET',
                headers:{
                    Authorization:user.token
                }
            })
            const json = await response.json()
            if (response.ok) {
                const p = await axios.put(json.url, file, {
                    headers: {
                        'Content-Type': 'image/png'
                    }
                })
                const url = json.url.split('?')[0]

                setImagesArr((p)=>[url,...p])
            }
            else{
                setError(json.message)
            }
            setUploading(false)
        }
        fileHandler()
    }, [file])

    useEffect(()=>{
        if(user && edit){
            setImagesArr(details?details.images:[])
            setText(details?.text)
            setTitle(details?.title)
        }
    },[user,details])

    const postFunction = async () => {
        try {
            const epoch = getTodaysEpoch()
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/notes/note`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": user.token,
                },
                body: JSON.stringify({ title,email: user.email, text, epoch, images: imagesArr })
            })
            const json = await response.json()
            // console.log(json);
            if (response.ok) {
                dispatchModal({ type: 'CLOSE' })
                dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: json.message, type: 'success' } })

                if(titleArr?.length)
                    setTitleArr((p)=>[{title:title,_id:json.addedNoteId},...p])
                else 
                    setTitleArr([{title:title,epoch,_id:json.addedNoteId}])
            }
            else { 
                setError(json.message)
            }
        }
        catch (e) {
            setError(e.message)
        }
    }

    const editFunction = async () => {
        try {
            const epoch = getTodaysEpoch()
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/notes/edit`, {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": user.token,
                },
                body: JSON.stringify({noteId:details._id,newText:text,newTitle:title,newImages:imagesArr })
            })
            const json = await response.json()
            // console.log(json);
            if (response.ok) {
                dispatchModal({ type: 'CLOSE' })
                dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: 'Note edited successfully', type: 'success' } })
                 
                setDetails((p)=>{
                    return {...p,text,title,images:imagesArr}
                })
            }
            else { 
                setError(json.message)
            }
        }
        catch (e) {
            setError(e.message)
        }
    }

    const submitHandler = async () => {

        if(title.trim().length>MAX_TITLE_LENGTH)
            return setError(`Title too long, max ${MAX_TITLE_LENGTH} characters allowed`)
        if(text.length>MAX_TEXT_LENGTH)
            return setError(`Note too long, max ${MAX_TEXT_LENGTH} characters allowed`)
        
        setSubmitting(true) 
        if(edit){
            await editFunction()
        }
        else{
            await postFunction()
        }
        setSubmitting(false)
    }

    const removeHandler = (img) => {
        setImagesArr((p) => p.filter((i) => i !== img))
    }

 
    return (
        <Container>
            {
                uploading && <Uploading>Uploading...</Uploading>
            }
            <Heading>
                <h3>{edit?"Edit":"Add"} page</h3>
                <Stats>
                <span>{title.length} / {MAX_TITLE_LENGTH}</span> 
                &nbsp;&nbsp; 
                <span>{text.length} / {MAX_TEXT_LENGTH}</span>
                </Stats>
                <AddImages onClick={() => setUploadImages(p => !p)} show={uploadImages}>
                    Add images
                </AddImages>
            </Heading>
            {
                !uploadImages && <TextContainer>

                <input 
                    value={title} 
                    onInput={(e) => { setTitle(e.target.value); setError('') }}  type='text' 
                    placeholder='write title...' 
                />

                <textarea 
                    placeholder='write here...' 
                    value={text} 
                    onInput={(e) => { setText(e.target.value); setError('') }}
                />

                </TextContainer>
            }
            {
                uploadImages &&
                <UploadImages>
                    <input disabled={uploading} type='file' onInput={(e) => setFile(e.target.files[0])} accept='images/*'></input>
                    <ImagesContainer>
                        { 
                            imagesArr.map((img, index) => {
                                return (
                                    <ImgWrapper key={Math.random()} >
                                        <Img src={img} />
                                        <Remove onClick={() => removeHandler(img)}>x</Remove>
                                    </ImgWrapper>
                                )
                            })
                        }
                    </ImagesContainer>
                </UploadImages>
            }
            {error?.length !== 0 && <Message error>{error}</Message>}
            <Submit disabled={submitting} onClick={submitHandler}>{submitting?'Submitting...':'Submit'}</Submit>
        </Container> 
    ) 
}

export default AddNote
