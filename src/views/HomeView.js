import React from 'react';
import Container from '../components/Container/Container';
import s from './styles.module.css';

export default function HomeView() {
  return (
    <Container>
      <h1 className={s.title}>Welcome to ZombiLand!!</h1>
    </Container>
  );
}
