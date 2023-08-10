import PropTypes from "prop-types";
import Header from "../components/Header";
import { innovationType, quizConfig } from "../config";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const QuizPage = () => {
  const [answerCollector, setAnswerCollector] = useState({});
  const onChange = (quiz) => (e) => {
    const {
      target: { value },
    } = e;
    const { answers: choices, questionId, ...props } = quiz;
    const answer = choices.find((v) => v.value === value);
    setAnswerCollector((v) => ({
      ...v,
      [questionId]: {
        ...props,
        answer,
      },
    }));
  };

  const isDisabledButton = useMemo(() => {
    return Object.keys(answerCollector).length !== quizConfig.length;
  }, [answerCollector]);

  const calculation = useMemo(() => {
    const initialMappingQuiz = {
      SPECIALIST: 0,
      EXPLORER: 0,
      VISIONARY: 0,
      ADVOCATE: 0,
      BUILDER: 0,
    };
    const result = Object.keys(answerCollector).reduce((acc, next) => {
      const choiceSelect = answerCollector[next];

      acc[choiceSelect.answer.value] += choiceSelect.score;
      return acc;
    }, initialMappingQuiz);
    return result;
  }, [answerCollector]);

  console.log({
    calculation,
  });
  const handleSubmitForm = () => {
    //send address and answer and score to database
  };
  return (
    <div className="py-4 gap-y-11">
      <Header />
      <div className="px-8 my-9">
        <h3 className="text-3sm font-bold">
          What types of innovator you are ?
        </h3>
      </div>
      <div className="px-8">
        {quizConfig.map((quiz, quizIndex) => {
          const answers = quiz?.answers ?? [];
          return (
            <div key={quiz.questionId} className="my-4">
              <label className="font-bold my-2">
                {quizIndex + 1}. {quiz.title}
              </label>
              {answers.map((answer, index) => {
                return (
                  <div className="my-2 flex items-start" key={answer.label}>
                    <input
                      className="mt-1 mx-2"
                      id={`quiz-` + quiz.questionId + index}
                      type="radio"
                      value={answer.value}
                      onChange={onChange(quiz)}
                      name={`quiz-` + quiz.questionId}
                    />
                    <label htmlFor={`quiz-` + quiz.questionId + index}>
                      {answer.label}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="mt-12 px-8 width-full">
        <button
          className={`px-4 py-6 w-full m-auto text-white rounded-full text-3sm font-bold ${
            isDisabledButton ? "bg-[#808080]" : "bg-[#9B74DA]"
          }`}
          disabled={isDisabledButton}
          onClick={handleSubmitForm}
        >
          Done
        </button>
      </div>
    </div>
  );
};

QuizPage.propTypes = {
  // propName: PropTypes.string,
};

export default QuizPage;
