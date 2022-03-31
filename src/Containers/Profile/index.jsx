import React, { useEffect, useState } from "react";
import styled from "styled-components";

//Data > Accounts
import accounts from "../../API/accounts";

//Axios
import axios from "axios";

//Redux
import { editName } from "../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";

//Components
import Account from "./Account";

const Profile = () => {
  //* STATES
  //input
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  //Btn Edit
  const [onEdit, setOnEdit] = useState(false);

  //HOOKS init
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  //USEEFFECT
  useEffect(() => {
    const token = userData.token;

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/profile`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        const { firstName, lastName } = res.data.body;
        dispatch(editName(firstName, lastName));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, userData.token]);

  /**
   * Submit form user edit
   * @param {Object} e event
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    //Get token from Store
    const token = userData.token;

    //put content > OBJ send with put method
    const data = {
      firstName: inputFirstName,
      lastName: inputLastName,
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/user/profile`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(editName(inputFirstName, inputLastName));
        setOnEdit(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * f(x) who clean form feild
   */
  const cancelEdit = () => {
    setInputFirstName("");
    setInputLastName("");
  };

  /**
   * f(x) who toggle edit name button
   */
  const handleEdit = () => {
    setOnEdit(!onEdit);
  };

  return (
    <MAIN className="bg-dark">
      <header className="header">
        <h2>
          Welcome back
          <span className="header-name">{`${userData.firstName} ${userData.lastName} !`}</span>
        </h2>
        <button
          className="edit-button"
          type="button"
          value="Edit"
          onClick={handleEdit}
        >
          Edit Name
        </button>
        {onEdit && (
          <form onSubmit={handleSubmit}>
            <div className="header-form-group">
              <label className="sr-only" htmlFor="firstname">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                placeholder={userData.firstName}
                name="firstnameInput"
                value={inputFirstName}
                onChange={(e) => setInputFirstName(e.target.value)}
              />
              <label className="sr-only" htmlFor="lastname">
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                placeholder={userData.lastName}
                name="lastnameInput"
                value={inputLastName}
                onChange={(e) => setInputLastName(e.target.value)}
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
                onClick={cancelEdit}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </header>
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
    margin-bottom: 2rem;

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
