import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useGlobalState from '../../../Context';
import '../../../css/main.css';
import Navigation from "../../Navigation/View/Navigation";
import '../Css/Information.css'


const Information = (props) => {
  const [{ loginName },] = useGlobalState();
  const [value, setValue] = useState("A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument")
  const [value2, setValue2] = useState("Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence")




  return (
    <>

      <section className="wrapper">
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
          <Navigation props={loginName} />
          <br />
          <div >
            {props.value === "" || props.value === "Select" ? '' :
              <div>
                {props.value === "Option 1" ? <p>{value}</p> : <p>{value2}</p>}
              </div>
            }


          </div>
        </div>
      </section>
    </>
  )
}

export default Information