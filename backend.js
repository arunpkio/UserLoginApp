// backend.js
.pragma library

/*
  Validate the input credential
  Return values are..
  0 - Success
  1 - credentials are empty
*/
function validateUserCredentials(uname, pword)
{
    var ret
    if(uname === "" || pword === "")
    {
        ret = 1
    }
    else
    {
        ret = 0
    }
    return ret
}

/*
  Validate the input credential to register
  Return values are..
  0 - Success
  1 - credentials are empty
  2 - passwords does not match
*/
function validateRegisterCredentials(uname, pword, pword2, hint)
{
    var ret
    if(uname === "" || pword === "" || pword2 === "" || hint === "")
    {
        ret = 1
        return ret
    }
    else if(pword !== pword2)
    {
        ret = 2
    }
    else
    {
        ret = 0
    }
    return ret
}
