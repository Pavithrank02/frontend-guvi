import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIService from "../service/apiService";
import axios from "axios";


export const getFetch = createAsyncThunk("get-users/getFetch", async () => {
  const res = await APIService.getAll();
  // console.log(res)
  return res.data;

})
// console.log("api",FETCH_API)
export const apiSlice = createSlice({
  name: "api",
  initialState: { id: "", name: "", email: "", password: "", confirmpassword: "", data: [], age: "", dob: "", gender: "", phone: "" },

  reducers: {

    fethApi: (state, action) => {

      try {
        // state = action.payload;
        const data = state.data

        axios.post(
          "http://127.0.0.1:3000/user", data

        );
        state.data.push(data)

      } catch (err) {
        console.log(err)

      }

    },

    login: (state, action) => {
      try {
        state = action.payload;
        const data = {
          id: state.id,
          email: state.email,
          password: state.password
        }
        axios
          .post("http://127.0.0.1:3000/login", data)
          .then((response) => {
            console.log(response.data);
            alert("login success")
            console.log(response.user);
            localStorage.setItem("key", response.data.token);
            const token = localStorage.getItem("key");
            if (token) {
              window.location.href = `/home`
              // console.log(res.data._token)
            } else {
              return false
            }
            // window.location.href = '/display'
            // Handle response
          });
      } catch (err) {

      }
    },
    register: (state, action) => {
      try {
        state = action.payload;
        const data = {
          name: state.name,
          email: state.email,
          password: state.password,
          confirmpassword: state.confirmpassword
        }
        axios
          .post("http://127.0.0.1:3000/register", data)
          .then((response) => {
            console.log(response);
            if (response.status === 201) {
              // console.log(window)
              alert("user registered successfully!!Login into the user")
              window.location.href = '/signin'
              //   setSubmitted(true);
              //   navigate("/signin");
            }
            // Handle response
          })
          .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              alert(error.response.data.msg);
              window.location.href = '/'
              //   setSubmitted(false);
              //   navigate("/signup")

              // console.log(error.response.status);
              // console.log(error.response.headers);
            }
          });
      } catch (err) {
        console.log(err.message);
      }
    },
    deleteuser: (state, action) => {
      try {
        state = action.payload;
        const data = state.id


        axios
          .delete(`http://127.0.0.1:3000/get-users/${data}`)
          .then((response) => {
            console.log(response)
            alert("user deleted successfull");
            // window.location.href = '/display'
            // window.location.reload();
            // Handle response
          });
      } catch (err) {
        console.log(err.message);
      }
    },
    updateuser: (state, action) => {
      try {
        state = action.payload;
        const data = {
          id: state.id,
          name: state.name,
          email: state.email,
          password: state.password,
          phone: state.phone,
          gender: state.gender,
          age: state.age,

        }
        // console.log("con",data.name, data.id)
        axios.get(`http://127.0.0.1:3000/get-users/${data.id}`)
        console.log(data.id)
        if (data.id) {
          axios
            .put(`http://127.0.0.1:3000/get-userss/${data.id}}`, data)
            .then((res) => {
              console.log(res.data);
              // navigate("/");
              window.location.href = '/display'
            })
            .catch((err) => {
              console.log(err);
            });

        }

        //   }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  extraReducers: {

    [getFetch.fulfilled]: (state, { payload }) => {
      console.log("slice", payload.data)
      return [payload.data]

    },
  }

});



export const { deleteuser, login, register, updateuser, fetchuser, fethApi } = apiSlice.actions;
export default apiSlice.reducer;
