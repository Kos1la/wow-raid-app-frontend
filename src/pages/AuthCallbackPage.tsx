import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// const AuthCallbackPage = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth0();
//   const { createUser } = useCreateMyUser();

//   const hasCreatedUser = useRef(false);

//   useEffect(() => {
//     if (user?.sub && user?.email && !hasCreatedUser.current) {
//       createUser({ auth0Id: user.sub, email: user.s });
//       hasCreatedUser.current = true;
//     }
//     navigate("/");
//   }, [createUser, navigate, user]);
//   return <>Loading...</>;
// };

// export default AuthCallbackPage;

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { getIdTokenClaims } = useAuth0(); 
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    const getUserEmail = async () => {
      try {
        const idTokenClaims = await getIdTokenClaims();
        if (idTokenClaims && idTokenClaims.email) {
          const email = idTokenClaims.email; // Получение электронной почты из токена
          if (email && !hasCreatedUser.current) {
            createUser({ auth0Id: idTokenClaims.sub, email }); // Создание пользователя с электронной почтой
            hasCreatedUser.current = true;
          }
        } else {
          console.error("User email is not available in idTokenClaims");
        }
      } catch (error) {
        console.error("Failed to get user email:", error);
      }
      navigate("/");
    };

    getUserEmail(); // Вызов функции для получения электронной почты пользователя
  }, [createUser, getIdTokenClaims, navigate]);

  return <>Loading...</>;
};

export default AuthCallbackPage;
