import CloudConceptsQuiz from "./Cloud/CloudConceptsQuiz"
import './Quiz.css';

function Quiz() {
  return (
    <div>
        <section>
            <h1 className="h1Header">Tage en quiz om Cloud Computing concept</h1>
            <CloudConceptsQuiz />
        </section>
    </div>
  )
}

export default Quiz