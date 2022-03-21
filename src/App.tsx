import { useState } from 'react';
import { Tweet } from  './components/Tweet';

function App() {
  const [tweets, setTweets] =  useState<string[]>([
    'Tweet 1',
    'Tweet 2 ',
    'Tweet 3',
    'Tweet 4'
  ]);


  function createTweet(){
    setTweets([...tweets, 'Tweet 5']);
  }

  return (
  <div>
    <Tweet text="Texto 1" />
    <Tweet text="Texto 2"/>
    <Tweet text="Texto 3"/>


    {tweets.map(tweet => {
      return <Tweet text={tweet}/>
    })}
  
    <button onClick={createTweet}> Adicionar Tweet</button>
  </div>
  )
}

export default App
