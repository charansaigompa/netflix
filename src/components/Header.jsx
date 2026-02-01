import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { togglegeneralSearch } from "../utils/generalSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showgeneralSearch = useSelector((store) => store.general.showgeneralSearch);
  const dispatch = useDispatch();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        //dispatch(removeUser())
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handlegeneralSearchClick = () => {
    dispatch(togglegeneralSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-50 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-center mb-2 p-2">
          {showgeneralSearch && (
            <select
              onChange={handleLanguageChange}
              name=""
              id=""
              className="p-2 h-10 mt-3 bg-gray-900 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handlegeneralSearchClick}
            className="h-9 px-4 mx-6 my-3 bg-purple-800 text-white rounded-lg"
          >
            {showgeneralSearch?"Home":" Search"}
          </button>
          <img className="w-12 rounded-lg h-12" src={user.photoURL} alt="" />
          <button onClick={handleSignout} className="h-9 px-4 mx-6 my-3 bg-red-700 text-white rounded-lg">
            signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
