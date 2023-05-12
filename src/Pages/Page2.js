import React from "react";
import "../App.css";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

function Page2(props) {
  const location = useLocation();
  const data = location?.state.data;

  return (
    <>
      <h1 className="text-center text-2xl font-bold m-8">
        {props.counter.value}
      </h1>
      <h2 className="text-center">{data.title}</h2>
    </>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer,
});

export default connect(mapStateToProps, null)(Page2);
