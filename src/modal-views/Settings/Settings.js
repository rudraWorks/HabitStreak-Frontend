import React, { useState } from 'react'
import { Container, RenameHabit, DeleteHabit, DeleteButton, BottomRow, ArchiveButton } from './Styles'
import { Input, Button } from '../../pages/Add/Styles'
import useModal from '../../hooks/useModal'
import { useNavigate } from 'react-router-dom'

function Settings({ habit, setHabit, user, archived,setArchived}) {
    const [renaming, setRenaming] = useState(false) 
    const [deleting, setDeleting] = useState(false)
    const [archiving, setArchiving] = useState(false)
    const [error, setError] = useState('')
    const [tempHabit, setTempHabit] = useState(habit)
    const { dispatchModal } = useModal()
    const navigate = useNavigate()

    const handleRename = async () => {
        setRenaming(true)

        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/renameHabit`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "authorization": user.token
                },
                body: JSON.stringify({ newHabit: tempHabit, habit })
            })

            const json = await response.json()
            console.log(json)
            if (!response.ok)
                setError(json.message)
            else {
                setHabit(json.message)
                dispatchModal({ type: 'CLOSE' })
            }
        }
        catch (e) {
            setError(e.message)
        }
        setRenaming(false)
    }
    const handleDelete = async () => {
        setDeleting(true)
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/deleteHabit`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": user.token
                },
                body: JSON.stringify({ habit })
            })
            const json = await response.json()
            if (!response.ok)
                setError(json.message)
            else {
                navigate('/habits')
                dispatchModal({ type: 'CLOSE' })
            }
        }
        catch (e) {
            setError(e.message)
        }
        setDeleting(false)
    }
    const handleArchive = async () => {
        setArchiving(true)
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/archiveHabit`, {
                method: 'PUT',
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": user.token
                },
                body: JSON.stringify({ habit })
            })
            const json = await response.json()
            if (!response.ok)
                setError(json.message)
            else {
                dispatchModal({ type: 'CLOSE' })
                setArchived((p)=>p*-1)
            }
        }
        catch (e) {
            setError(e.message)
        }
        setArchiving(false)
    } 
    return (
        <Container>
            <span style={{ color: 'red' }}>{error}</span>
            <h3>Rename habit</h3>
            <RenameHabit>
                <Input value={tempHabit} onInput={(e) => setTempHabit(e.target.value)} /> <Button onClick={handleRename} disabled={renaming}>{renaming ? 'Renaming' : 'Rename'}</Button>
            </RenameHabit>
            <BottomRow>
                <div>
                    <h3>Archive habit</h3>
                    <DeleteHabit>
                        { 
                                archived===-1?
                                <ArchiveButton disabled={archiving} onClick={handleArchive}>{archiving ? 'Archiving' : 'Archive'}</ArchiveButton>
                                :
                                <ArchiveButton disabled={archiving} onClick={handleArchive}>{archiving ? 'Restoring' : 'Restore'}</ArchiveButton>
                            
                        }

                    </DeleteHabit>
                </div>

                <div>
                    <h3>Delete habit</h3>
                    <DeleteHabit>
                        <DeleteButton disabled={deleting} onClick={handleDelete}>{deleting ? 'Deleting' : 'Delete'}</DeleteButton>
                    </DeleteHabit>
                </div>

            </BottomRow>

        </Container>
    )
}

export default Settings