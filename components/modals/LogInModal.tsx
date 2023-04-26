import {useState , useCallback} from 'react'
import useLogInModal from '@/hooks/useLogInModal'
import Input from '../Input';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';
const LogInModal = () => {
     const logInModal = useLogInModal() ;
     const registerModal = useRegisterModal() ;

     const [email,setEmail] = useState('') ;
     const [password,setPassword] = useState('') ;
     const [isLoading, setIsLoading] = useState(false) ;



     const onToggleHandle = useCallback(() => {
          logInModal.onClose();
          registerModal.onOpen();
        }, [logInModal, registerModal])

     const onSubmitHandle = useCallback( async () =>{
          try{
               setIsLoading(true) ;
               // ========== add Login

               // ======== fetch state from our state management 
               logInModal.onClose() ;
          } catch(error){
               console.log(error)
          } finally{
               setIsLoading(false) ;
          }    
     } ,[logInModal])

     // =========================== JSX 
     const bodyContent = (
          <div className="flex flex-col gap-4">
               <Input
                    placeholder="Email"
                    onChange={ ( e ) => setEmail( e.target.value ) }
                    value={ email }
                    disabled={ isLoading }
               />
               <Input
                    placeholder="Password"
                    type="password"
                    onChange={ ( e ) => setPassword( e.target.value ) }
                    value={ password }
                    disabled={ isLoading }
               />
          </div>
     )
     const footerContent = (
          <div className="text-neutral-400 text-center mt-4">
            <p>First time using Twitter?
              <span 
                onClick={onToggleHandle} 
                className="
                  text-white 
                  cursor-pointer 
                  hover:underline
                "
                > Create an account</span>
            </p>
          </div>
        )
  return (
       <div>
            <Modal
                 disabled={ isLoading }
                 isOpen={ logInModal.isOpen }
                 title="Login"
                 actionLabel="Sign in"
                 onClose={ logInModal.onClose }
                 onSubmit={ onSubmitHandle }
                 body={ bodyContent }
                 footer={ footerContent }
                /> 
       </div>
  )
}

export default LogInModal