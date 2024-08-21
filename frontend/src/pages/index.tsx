import Head from 'next/head';
import { Header } from '@/components/Header/Header';
import { SideBar } from '@/components/SideBar/SideBar';
import { ChatSection } from '@/components/ChatSection/ChatSection';

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>Repo Rover</title>
        <meta name="description" content="A simple chat application layout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SideBar />

      <main className="main-section">
        <ChatSection />
      </main>
    </div>
  );
}
