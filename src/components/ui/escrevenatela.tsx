import Typewriter from 'typewriter-effect';

export function EscreveTexto(){
    return(
        <Typewriter
            options={{
                strings: ['FullStack Developer', 'Front-end', 'Back-End'],
                autoStart: true,
                loop: true,
            }}
        />
    )
}

