import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

//Data > Accounts
import accounts from "../../API/accounts";

//Axios
//import axios from "axios";

//Redux
import { editName, userInfo } from "../../redux/redux";
import { useDispatch, useSelector } from "react-redux";

//Components
import Account from "./Account";

//------------------------------------------------------------//

const Profile = () => {
  //* STATES
  //Btn Edit
  const [onEdit, setOnEdit] = useState(false);

  //HOOKS init
  //State from store
  const { firstName, lastName } = useSelector((state) => state.user);
  //Dispatch
  const dispatch = useDispatch();
  //useRef
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  //USEEFFECT => Get user infos
  useEffect(() => {
    dispatch(userInfo())
  }, [dispatch])

  return (
    <MAIN className="bg-dark">
        {!onEdit ? (
        
      <header className="header">
            <h2>
              Welcome back
              <span className="header-name">{firstName} {lastName} !</span>
            </h2>
            <button
              className="edit-button"
              type="button"
              value="Edit"
              onClick={(e) => {
                e.preventDefault();
                setOnEdit(true);
              }}
            >
              Edit Name
            </button>
            </header>

        ) : (
          <header className="header">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                editName({
                  firstName: firstNameRef.current.value,
                  lastName: lastNameRef.current.value,
                })
              );
              setOnEdit(false);
            }}
          >
            <div className="header-form-group">
              <label className="sr-only" htmlFor="firstname">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                name="firstnameInput"
                defaultValue={firstName}
                ref={firstNameRef}
              />
              <label className="sr-only" htmlFor="lastname">
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                name="lastnameInput"
                defaultValue={lastName}
                ref={lastNameRef}
              />
            </div>
            <div className="header-form-group">
              <button className="edit-button" type="submit" value="Save">
                Save
              </button>
              <button
                className="edit-button"
                type="button"
                value="Cancel"
                onClick={(e) => {
                  e.preventDefault();
                  setOnEdit(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
      </header>
        )}

      <h2 className="sr-only">Accounts</h2>
      {accounts.map((elt) => (
        <Account
          key={elt.id}
          title={elt.title}
          amount={elt.amount}
          descr={elt.description}
        />
      ))}
    </MAIN>
  );
};

/*-----------------------*\
            CSS
\*-----------------------*/

const MAIN = styled.main`
  flex: 1;

  &.bg-dark {
    background-color: #12002b;
  }
  .header {
    color: #fff;
    margin: 2rem 0;

    &-form-group {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 0;

      input {
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 1.1rem;
        margin: 10px;
      }
    }

    h2 {
      font-size: 2rem;
    }

    &-name {
      display: block;
    }
  }

  .edit-button {
    background-color: #00bc77;
    border-color: #00bc77;
    color: #fff;
    padding: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 10px;
    width: 140px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default Profile;
