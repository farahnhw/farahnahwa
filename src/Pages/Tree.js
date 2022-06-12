import logo from '../../src/logo.svg';
import '../App.css';
import { secondary } from 'daisyui/src/colors';
import React, { useState } from "react"

function Tree() {

  const [modalState, setModalState] = useState([])
  const [text, setText] = useState("")
  const [deskripsi, setDeskripsi] = useState("")

  function addItem() {
    var newData = [
      ...modalState,
      {
        id: modalState.length + 1,
        deskripsi: "",
        isValue: true,
        field: ""
      },
    ]
    setModalState(newData)
  }

  // function deleteData(item) {
  //   var lists = modalState.filter(x => {
  //     return x.id != item.id;
  //   })

  //   setModalState(lists);
  // }

  function setItem(index) {
    console.log("text", text);
    console.log("indexna", index);

    var data = modalState;
    data[index].isValue = false;
    data[index].deskripsi = "";
    data[index].field = text;

    console.log("data hasil", data);

    setModalState(data)
    setText("");
  }

  const setFunctionDesc = (item, indexData) => {
    var data = modalState;
    data[indexData].deskripsi = deskripsi;
    setModalState(data)
    setDeskripsi("");
    addItem()
  }

  return (
    <>
      <section className="pt-36 pb-28 bg-green">
        <div className="container">
          <div className="card card-compact w-96 bg-base-100 shadow-xl bottom-20">
            <div className="card-body">
              <h2 className="card-title">Start Your Form</h2>

              <div className="card-actions justify-end">
                <button onClick={addItem} class="btn btn-primary">+</button>
              </div>
            </div>
          </div>
          {modalState.map((item, index) => {
              return (
                <div>
                  {
                    item.isValue == false ? (
                      <div className="card card-compact w-96 bg-base-100 shadow-xl">

                        <div className="card-body">
                          <h2 className="card-title">{item.field}</h2>
                          {
                            item.deskripsi == "" ? (
                              <input type="text" placeholder="Type here" onChange={(item) => setDeskripsi(item.target.value)} class="input input-bordered hover:border-green w-full max-w-xs" />
                            ) : (
                              <input value={item.deskripsi} disabled={true} type="text" placeholder="Type here" class="input input-bordered hover:border-green w-full max-w-xs" />
                            )}

                          <div className="card-actions justify-end">
                            <button onClick={() => setFunctionDesc(item, index)} class="btn btn-primary">Add</button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="card w-96 bg-slate-100">
                        <div className="container">
                          <div class="form-control w-full max-w-xs">

                            <input onChange={(item) => setText(item.target.value)} type="text" placeholder="Type here" class="input input-bordered hover:border-green w-full max-w-xs" />
                            <button onClick={() => setItem(index)} class="btn btn-sm scale:50 my-2 mx-auto hover:bg-slate-800 hover:text-background">+</button>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  {
                    modalState.length == 1 ? (<div></div>) : (index + 1) == modalState.length ? (<div></div>) : (<div className="w-1 h-40 bg-black"></div>)
                  }
                </div>
              )})}
        </div>
      </section>
    </>

  );
}


export default Tree;
