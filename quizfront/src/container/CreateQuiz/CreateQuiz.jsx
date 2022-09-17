import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./createquiz.scss";
import QuizList from "./QuizList/QuizList";
import Select from "react-select";
import validate from '../../validations/RequiredValidation'
import axios from "axios";


function CreateQuiz() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [range, setRange] = useState([0]);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [values, setvalues] = useState({
    fields: {
        group: { value:"",required:"true"  },
        question: { value:"",required:"true"  },
        Answer: { value:"",required:"true"  },
        // userId: { value:"",required:"true"  },
        // options: { value:"", required:"true" },
    },
  });
  const [isValid, setIsvalid] = useState(false);
  const [errors, setErrors] = useState({});
const [data, setdata] = useState({ group: "",question:"",Answer: "",userId:"",options:""});
  const handleSwitch = (e) => setIsSwitchOn(!isSwitchOn);
  const handleRange = (e) => {
    console.log(e.target.value);
    let limit = [...Array(parseInt(e.target.value)).keys()];
    setRange(limit);
  };
  const options = (range) => {
    let optionsAr = [];
    range.map((obj) => {
      optionsAr.push({
        value: `option ${obj + 1}`,
        label: `option ${obj + 1}`,
      });
    });
    console.log("optionsAr", optionsAr);
    return optionsAr;
  };
  const handlechange=(e)=>{
    const {name,value}=e.target
    setvalues({
      ...values,
      fields: {
        ...values.fields,
        [name]: { ...values.fields[name], value: value },
      },
    });
    setdata({ ...data, [name]: value });
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isValid) {
        console.log("Noerror",data)
        axios.post("http://localhost:5000/api/v1/quiz/add",data).then((res)=>{
            alert("success")
            handleClose()
        });
        // serviceBase.post(API_END_POINTS.SERVICE.CARS+API_END_POINTS.ADD,data).then((res)=>{
        //   toast.error("dddfdfd",{
        //     position: toast.POSITION.TOP_CENTER
        // });
        // alert("Add Success")
        // setupdatestate(updatestate+1)
        // // success(res)
        // handleClose()
        // }).catch((err)=>{
        //   toast.error(err.message?err.message:"Error while processing the request",{
        //     position: toast.POSITION.TOP_RIGHT
        // });
        // alert("Something wrong")
        // })
      }
  }, [errors,isValid])

  const savechanges=()=>{
    setErrors(validate(values));
    console.log(errors);
    setIsvalid(true);
  }

  return (
    <div className="createquiz">
      <div className="createBtn">
        <Button onClick={handleShow}>Create Question</Button>
      </div>
      <QuizList />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div>
              <Form.Label htmlFor="groupName">Group Name</Form.Label>
              <Form.Control type="text" id="groupName" name="group" onChange={handlechange} />
              <p>{errors.group}</p>
            </div>
            <div>
              <Form.Label htmlFor="question">Question</Form.Label>
              <Form.Control type="text" id="question" name="question" onChange={handlechange} />
              <p>{errors.question}</p>
            </div>
            <div>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="*(adding options)"
                onChange={handleSwitch}
                checked={isSwitchOn}
              />
            </div>
            {isSwitchOn ? (
              <div className="isSwitchOnDiv">
                <Form.Label>Range (select options count)</Form.Label>
                <Form.Range
                  min={1}
                  max={5}
                  onChange={handleRange}
                  defaultValue={1}
                />
                <div className="options">
                  {range.map((obj) => {
                    return (
                      <div>
                        <Form.Label htmlFor={"option" + obj + 1}>
                          option {obj + 1}
                        </Form.Label>
                        <Form.Control type="text" id={"option" + obj + 1} />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
            {isSwitchOn ? (
              <div>
                <Select options={options(range)} placeholder="Answer" />
              </div>
            ) : (
              <div>
                <Form.Label htmlFor="Answer">Answer</Form.Label>
                <Form.Control type="text" id="Answer" name="Answer" onChange={handlechange} />
                <p>{errors.Answer}</p>
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={savechanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateQuiz;
