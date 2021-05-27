import React from "react";

export default function FormFn() {
     const [email, setEmail] = React.useState();
     const [password, setPassword] = React.useState();

     const handelOnSubmit= (e) =>{
          e.preventDefault();
          console.log(`
               Email: ${email}
               Password:${password}
          `)
     }
  return (
    <div>
      <fieldset>
        <legend>Login Form Functional Compoent</legend>
        <form onSubmit={handelOnSubmit}>
          <div>
            <label htmlFor="email">
              Name:
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Input your email"
                onChange={(e)=> setEmail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              {" "}
              Password:
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Input your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </label>
          </div>

          <div>
            <button type="submit">Log In</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
