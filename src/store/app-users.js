import { createSlice } from "@reduxjs/toolkit";
import test1 from "../img/test-1.jpg";
import test2 from "../img/test-2.jpg";
import test3 from "../img/test-3.jpg";
import test4 from "../img/test-4.jpg";

const appUsers = createSlice({
  name: "app users",
  initialState: {
    users: [
      {
        id: "vim3jQlfiNO4XPUUrhWi9Gx25LW2",
        searchName: "john smith",
        name: "John Smith",
        handle: "johnsmith",
        img: test1,
        headerImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsK4HpfjWe5NF2dRRsNjAJhHzZ_kaOjKPUg&usqp=CAU",
        location: "Los Angeles, CA",
        following: 478,
        followers: 1758,
        bio: "This is just a bunch of random filler text to see if the profile info will grow or shrink depending on the user input for their personal profile page. It should work I hope but let's write a little more just in case",
      },
      {
        id: 1,
        searchName: "jarrod gilliland",
        name: "Jarrod Gilliland",
        handle: "jarrodgilliland",
        img: test1,
        headerImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5-o5bWqvdklZ47jPbWOJj9Yoi_e2eh8Heg&usqp=CAU",
        location: "Columbus, OH",
        following: 85,
        followers: 150,
        bio: "This is just a bunch of random filler text to see if the profile info will grow or shrink depending on the user input for their personal profile page. It should work I hope but let's write a little more just in case",
      },
      {
        id: 2,
        searchName: "joey brown",
        name: "Joey Brown",
        handle: "joeybrown",
        img: test2,
        headerImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49dyll3bet-0nO2UAeU6FPrQ-NB9_afgu-w&usqp=CAU",
        location: "Tiffin, OH",
        following: 102,
        followers: 178,
        followsYou: true,
      },
      {
        id: 3,
        searchName: "sarah jones",
        name: "Sarah Jones",
        handle: "thesarahjones",
        img: test3,
        headerImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTU8AVIuEz8fqo4Ql3bKMMiNeOwMLhVX8s0w&usqp=CAU",
        location: "New York, NY",
        following: 387,
        followers: 894,
      },
      {
        id: 4,
        searchName: "richard greer",
        name: "Richard Greer",
        handle: "heyimrich",
        img: test1,
      },
      {
        id: 5,
        searchName: "bob marley",
        name: "Bob Marley",
        handle: "bobmarley",
        img: test2,
      },
      {
        id: 6,
        searchName: "jessica davis",
        name: "Jessica Davis",
        handle: "jessdavies",
        img: test4,
      },
      {
        id: 7,
        searchName: "cody ko",
        name: "Cody Ko",
        handle: "codyko",
        img: test1,
      },
      {
        id: 8,
        searchName: "wanda smith",
        name: "Wanda Smith",
        handle: "smithwanda",
        img: test3,
      },
    ],
  },
  reducers: {
    // Add a reducer to set users when getting fetch request from api
  },
});

export const appUsersActions = appUsers.actions;

export default appUsers.reducer;
