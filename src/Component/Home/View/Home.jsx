import React, { useState } from 'react';
import useGlobalState from '../../../Context';
import Navigation from "../../Navigation/View/Navigation";
import Information from "../../Information/View/Information"
import DropDown from '../../DropDown/View/DropDown';
import '../../../css/main.css';
import '../Css/Home.css'

const Home = () => {
  const [{ loginName },] = useGlobalState();
  const [value, setValue] = useState('')





  return (
    <>
      <section id="main-content">

        <section className="wrapper">
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
            <br />
              <Navigation props={loginName} >
              <DropDown onClose={(getvalue) => setValue(getvalue)} />
              <Information value={value} />
              </Navigation>


            <br />

          </div>
        </section>
      </section>
    </>
  )
}

export default Home