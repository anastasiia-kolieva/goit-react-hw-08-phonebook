import React from 'react';
import Container from '../components/Container/Container';
import zombiImage from './plants-vs-zombies.png';
import s from './styles.module.css';

export default function HomeView() {
  const img = zombiImage;
  return (
    <Container>
      <h1 className={s.title}>Welcome to ZombiLand!!</h1>
      <div className={s.div}>
        <img src={img} alt="" width="1200" />
      </div>
    </Container>
  );
}
