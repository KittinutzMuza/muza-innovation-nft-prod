import Header from "../components/Header";
import Lottie from "react-lottie";
import { quizConfig } from "../config";
import searching from "../assets/lotties/animation_searching.json";
import loading from "../assets/lotties/animation_loading.json";

import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [onMinting, setOnMinting] = useState(false);

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
    // console.log({
    //   calculation,
    // });
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
    try {
      setOnMinting(true);
      await mint({
        walletAddress: address,
        quiz: {
          answerCollector,
          score: calculation,
        },
        innovationType: winnerInnovationType,
      });
      navigate(`/result/${winnerInnovationType}`);
    } catch (err) {
      console.log(err);
    } finally {
      setOnMinting(false);
    }
  }, [navigate, address, answerCollector, calculation, winnerInnovationType]);
  console.log({
    winnerInnovationType,
  });
  const searchingOptions = {
    loop: true,
    autoplay: true,
    animationData: searching,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="py-4 pb-[4em] gap-y-11">
      <Header />
      {onMinting ? (
        <>
          <div className="mt-10 font-bold px-8">
            Finding your Innovator type...
          </div>
          <Lottie
            isClickToPauseDisabled
            className="absolute"
            options={searchingOptions}
            height={250}
          />
          <Lottie
            isClickToPauseDisabled
            className="absolute"
            options={loadingOptions}
            height={250}
          />
        </>
      ) : (
        <div>
          <div className="px-6 mt-9">
            <h3 className="text-[18px] font-bold">
              What types of innovator you are ?
            </h3>
          </div>
          <div className="px-8">
            {quizConfig.map((quiz, quizIndex) => {
              const answers = quiz?.answers ?? [];
              return (
                <div key={quiz.questionId} className="mb-8 mt-6">
                  <label className="font-[800] text-[14px] my-2">
                    {quizIndex + 1}. {quiz.title}
                  </label>
                  {answers.map((answer, index) => {
                    return (
                      <div className="mt-3 flex items-start" key={answer.label}>
                        <input
                          className="mt-1 mx-2"
                          id={`quiz-` + quiz.questionId + index}
                          type="radio"
                          value={answer.value}
                          onChange={onChange(quiz)}
                          name={`quiz-` + quiz.questionId}
                        />
                        <label
                          className="text-[14px]"
                          htmlFor={`quiz-` + quiz.questionId + index}
                        >
                          {answer.label}
                        </label>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="mt-12 px-8 md:flex md:w-[300px] justify-center m-auto w-full">
            <button
              className={`px-[6em] py-5 w-full m-auto text-white rounded-full text-3sm font-bold ${
                isDisabledButton ? "bg-[#80808060]" : "bg-[#9B74DA]"
              }`}
              disabled={isDisabledButton}
              onClick={handleSubmitForm}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

QuizPage.propTypes = {
  // propName: PropTypes.string,
};

export default QuizPage;
