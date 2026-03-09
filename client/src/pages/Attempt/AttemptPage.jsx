import QuestionBar from "../../componets/QuestionBar/QuestionBar";
import ResultPanel from "../../componets/ResultPanel/ResultPanel";
import SamplePanel from "../../componets/SamplePanel/SamplePane";
import './AttemptPage.scss';
import HintPanel from '../../componets/HintPanel/HintPanel'
import SQLPracticePage from "../../componets/SQLPracticePage/SQLPracticePage";
import QueryPanel from "../../componets/QueryPanel/QueryPanel";
const AttemptPage = () => {


  return (
    <>
      <div id="attempt" className="page">

        <QuestionBar />

        <div className='workspace'>
          <SamplePanel />

          <SQLPracticePage />
          <HintPanel />
        </div>
      </div>










    </>
  );
};

export default AttemptPage;