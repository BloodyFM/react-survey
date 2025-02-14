/* eslint-disable react/prop-types */
import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
    const { answersList, editAnswer, deleteAnswer } = props;
    return (
        <ul>
            {answersList.map((answerItem, i) => (
                <AnswersItem
                    answerItem={answerItem}
                    key={i}
                    editAnswer={editAnswer}
                    id={i}
                    deleteAnswer={deleteAnswer}
                />
            ))}
        </ul>
    );
}
