import React, { useEffect, useState } from 'react';
import Rating from '../../components/Rating';
import { Container, RatingRow, SuggestionInput, Loader } from './Styles'; // Assuming you have a Loader styled component
import useUser from '../../hooks/useUser';
import { SuccessMessage } from './Components';
import SuccessFailureMessageBox from '../../components/SuccessFailureMessageBox'

function Feedback() {
    const { user } = useUser();
    const [feedback, setFeedback] = useState({
        designAndLayout: 0,
        mobileResponsiveness: 0,
        overallSatisfaction: 0,
        suggestion: '',
        email: 'NA',
    });

    useEffect(() => {
        if (user && user !== 'LOADING') {
            setFeedback((prevFeedback) => ({
                ...prevFeedback,
                email: user.email,
            }));
        }
    }, [user]);

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleRatingChange = (aspect, rating) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [aspect]: rating,
        }));
    };

    const handleSuggestionChange = (e) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            suggestion: e.target.value,
        }));
    };

    const handleSubmit = async () => {
        let {designAndLayout,mobileResponsiveness,overallSatisfaction,suggestion}= feedback 
        suggestion = suggestion.trim()
        if (!designAndLayout && !mobileResponsiveness && !overallSatisfaction && !suggestion){
            setErrorMessage("Invalid input. At least one feedback aspect is required.")
            return 
        }
        setSubmitting(true);
        try {

            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/general/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedback),
            });
            const json = await response.json()
            if (response.ok) {
                setSuccessMessage('Feedback submitted successfully!');
                setErrorMessage('');
            } else {
                setErrorMessage(json.message);
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage(error.message);
            setSuccessMessage('');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Container>
                <h2>
                    Your feedback matters {user && user !== 'LOADING' ? user.name : ''}! 🙏
                </h2>
            {!successMessage &&
                <>
                    <RatingRow>
                        <span> 💻 Design and layout</span>{' '}
                        <Rating onChange={(rating) => handleRatingChange('designAndLayout', rating)} />
                    </RatingRow>

                    <RatingRow>
                        <span>📱 &nbsp;&nbsp;Mobile responsiveness</span>{' '}
                        <Rating onChange={(rating) => handleRatingChange('mobileResponsiveness', rating)} />
                    </RatingRow>

                    <RatingRow>
                        <span>😄 Overall satisfaction</span>{' '}
                        <Rating onChange={(rating) => handleRatingChange('overallSatisfaction', rating)} />
                    </RatingRow>

                    <RatingRow>
                        <span>✍️ Any suggestion / new feature / bug found</span>
                        <SuggestionInput value={feedback.suggestion} onChange={handleSuggestionChange} />
                    </RatingRow>
                </>
            }

            {successMessage && (
                <SuccessMessage>
                    Thanks for your feedback
                </SuccessMessage>
            )} 
            {errorMessage && <SuccessFailureMessageBox error={true}>{errorMessage}</SuccessFailureMessageBox>}
            {!successMessage &&
                <button onClick={handleSubmit} disabled={submitting}>
                    {submitting?'Submitting...':'Submit'}
                </button>
            }
        </Container>
    );
}

export default Feedback;
