import Typewriter from 'typewriter-effect';
  
export default function TypingEffect() {
  return (
    <div>
      <h3>GeeksforGeeks Typing Animation</h3>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hello World!')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
    </div>
  );
}