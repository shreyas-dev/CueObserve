import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import { Select, InputNumber } from "antd";

const { Option } = Select;

export default function ValueThreshold(props){
    const [params, setParams] = useState({operator: "greater"});

    let inputElement = null

    const onChangeOperator = operator => {
      setParams({operator: operator})
    }

    if(["greater", "!lesser", "lesser", "!greater"].includes(params.operator))
    {
      inputElement = (<InputNumber min={1} onChange={val => setParams({operator: params.operator, value1: val, value2: "null"})} /> )
    }
    if(["between", "!between"].includes(params.operator))
    {
      inputElement = (
      <span>
      <InputNumber min={1} onChange={val => setParams(param => {return {...param, value1: val}})} />
      &nbsp; - &nbsp;
      <InputNumber min={1} onChange={val => setParams(param => {return {...param, value2: val}})} />
      </span>)
    }

    console.log(params)
  
    props.submitParams(params)


    return (
      <div>
      <div className={style.paramBox}>
        Anomaly when value <Select style={{width: "200px"}} defaultValue="greater" onChange={val => onChangeOperator(val)}>
            <Option value="greater">{"greater than"}</Option>
            <Option value="!lesser">{"greater than or equal to"}</Option>
            <Option value="lesser">{"less than"}</Option>
            <Option value="!greater">{"less than or equal to"}</Option>
            <Option value="between">between</Option>
            <Option value="!between">not between</Option>
            </Select> &nbsp; {inputElement}
            </div>
      </div>
    );
  }