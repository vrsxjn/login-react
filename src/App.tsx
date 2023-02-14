import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
  Image,
  Stack,
  Flex
} from '@chakra-ui/react'
import { login } from './services/login';
import {useRef, useState} from 'react';


function App() {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const [state, setState] = useState(false)


  function handleClick() {
   
    let result = login(inputRef.current.value, inputRef2.current.value)
    console.log(result)
    if(result === false) {
      setState(false)
    }
  }
  function loadingAnimtaion() {

  }
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#ba9004' padding='25px'>
     
        <Box width='25%' ml='37%' mt='10%' backgroundColor='#FFFFFF' borderRadius='25px'>
          <Flex>
          <Image 
            borderRadius='25px'
            src='https://bit.ly/dan-abramov' 
            alt='Dan Abramov' />
          <Box align='center' padding='50px'>
          <Stack>
          <h1>Faça o login</h1>
          <Input 
          ref={inputRef}
          type="text"
          isInvalid
          errorBorderColor='crimson'
          placeholder="email"
          />
          <Input 
          ref={inputRef2}
          type="text"
          isInvalid
          errorBorderColor='crimson'
          placeholder="password"
          />
          <Button
           isLoading={state}
           onClick={() => {
            setState(true)
            handleClick()
          }
           }
           loadingText='Entrando'
           colorScheme='teal'
           variant='outline'
          >
            Enviar
          </Button>
          </Stack>
          </Box>
          </Flex>
              
        </Box>
       
      </Box>

    </ChakraProvider>
  );
}

export default App;
function getInitialState() {
  throw new Error('Function not implemented.');
}

function setState(arg0: { buttonState: string; }) {
  throw new Error('Function not implemented.');
}

