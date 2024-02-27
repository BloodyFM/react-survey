/* eslint-disable react/prop-types */
import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
    console.log("Inside AnswersList: ", props);

    const { answersList, editAnswer } = props;

    return (
        <ul>
            {answersList.map((answerItem, i) => (
                <AnswersItem
                    answerItem={answerItem}
                    key={i}
                    editAnswer={editAnswer}
                    id={i}
                />
            ))}
        </ul>
    );
}
