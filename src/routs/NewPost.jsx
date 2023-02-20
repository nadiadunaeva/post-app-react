import classes from './NewPost.module.css';
import {useState} from "react";
import post from "../components/Post";
import Modal from "../components/Modal";
import {Link, Form, redirect} from "react-router-dom"

function NewPost() {

    // const [enteredBody, setEnteredBody] = useState("")
    // const [enteredAuthor, setenteredAuthor] = useState("")
    //
    // function changeBodyHandler(event) {
    //     setEnteredBody(event.currentTarget.value)
    // }
    //
    // function changeAuthorHandler(event) {
    //     setenteredAuthor(event.currentTarget.value)
    // }

//event + prevent http request
//     function submitFormHandler(event) {
//         event.preventDefault()
//
//         const postData = {
//             body: enteredBody,
//             author: enteredAuthor
//         }
//     }

    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body"
                              required rows={3}
                              name="body"
                    />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required/>
                </p>
                <p className={classes.actions}>
                    {/*//линки можно ставить куда угодно, даже на кнопки*/}
                    <Link to="/" type="button">Cancel</Link>
                    <button type="submit">Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({request}) {
    //data from form
  const formData=  await  request.formData();
  // formData.get("body")
    //extracting form data
    const postData = Object.fromEntries(formData) //{body:"..", author:".."}

  await  fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json"
        }
    });
    //after form submitting we return to main page
return redirect("/");
}