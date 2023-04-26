import {useState , useCallback} from 'react'
import useLogInModal from '@/hooks/useLogInModal'
import useRegisterModal from '@/hooks/useRegisterModal';
import Input from '../Input';
import Modal from '../Modal';



const RegisterModal = () => {
     const logInModal = useLogInModal() ;
     const registerModal = useRegisterModal() ;
     
     const [email,setEmail] = useState('') ;
     const [password,setPassword] = useState('') ;
     const [isLoading, setIsLoading] = useState(false) ;
     const [username, setUsername] = useState('');
     const [name, setName] = useState('');


     const onToggleHandle = useCallback(() => {
          if (isLoading) {
            return;
          }
        
          registerModal.onClose();
          logInModal.onOpen();
        }, [logInModal, registerModal, isLoading]);

     const onSubmitHandle = useCallback( async () =>{
          try{
               setIsLoading(true) ;
               // ========== add Login and Register

               // ======== fetch state from our state management 
               registerModal.onClose() ;
          } catch(error){
               console.log(error)
          } finally{
               setIsLoading(false) ;
          }    
     } ,[registerModal])

     // =========================== JSX 
     const bodyContent = (
          <div className="flex flex-col gap-4">
               <Input
                    disabled={ isLoading }
                    placeholder="Email"
                    value={ email }
                    onChange={ ( e ) => setEmail( e.target.value ) }
               />
               <Input
                    disabled={ isLoading }
                    placeholder="Name"
                    value={ name }
                    onChange={ ( e ) => setName( e.target.value ) }
               />
               <Input
                    disabled={ isLoading }
                    placeholder="Username"
                    value={ username }
                    onChange={ ( e ) => setUsername( e.target.value ) }
               />
               <Input
                    disabled={ isLoading }
                    placeholder="Password"
                    type="password"
                    value={ password }
                    onChange={ ( e ) => setPassword( e.target.value ) }
               />
          </div>
     )
     
     const footerContent = (
          <div className="text-neutral-400 text-center mt-4">
            <p>Already have an account?
              <span 
                onClick={onToggleHandle} 
                className="
                  text-white 
                  cursor-pointer 
                  hover:underline
                "
                > Sign in</span>
            </p>
          </div>
        )

  return (
       <div>
             <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmitHandle}
      body={bodyContent}
      footer={footerContent}
    />
       </div>
  )
}

export default RegisterModal