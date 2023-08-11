import Header from "../components/Header";
import { quizConfig } from "../config";
import { useCallback, useMemo, useState } from "react";
import { mint } from "../service";
import { useAccount } from "wagmi";
function shuffle(array = []) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
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

  const winnerInnovationType = useMemo(() => {
    console.log({
      calculation,
    });
    const listWinner = Object.keys(calculation).reduce((acc = [], next) => {
      if (acc.length == 0) {
        acc[0] = next;
        return acc;
      }
      const lastScore = calculation[acc[0]];
      const nextScore = calculation[next];

      if (lastScore && lastScore > nextScore) {
        return acc;
      } else if (lastScore && lastScore < nextScore) {
        acc[0] = next;
        return acc;
      } else if (lastScore && lastScore === nextScore) {
        acc.push(next);
        return acc;
      }
    }, []);
    if (isDisabledButton) {
      return "";
    }

    return shuffle(listWinner)[0];
  }, [calculation, isDisabledButton]);

  const { address } = useAccount();

  const handleSubmitForm = useCallback(async () => {
    //send address and answer and score to database
    await mint({
      walletAddress: address,
      quiz: {
        answerCollector,
        score: calculation,
      },
      innovationType: winnerInnovationType,
    });
  }, [address, answerCollector, calculation, winnerInnovationType]);
  console.log({
    winnerInnovationType,
  });
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
