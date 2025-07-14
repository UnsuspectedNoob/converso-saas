import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          color='#fed325'
          duration={30}
          id='123'
          name='Verba the Vocabulary Builder'
          subject='language'
          topic='Neural Network of the Brain'
        />

        <CompanionCard
          color='#afe233'
          duration={25}
          id='124'
          name='Neura the Brainy Explorer'
          subject='science'
          topic='Neural Network of the Brain'
        />

        <CompanionCard
          color='#bbe233'
          duration={13}
          id='823'
          name='Countsy the Number Wizard'
          subject='maths'
          topic='Derivatives and Integrals'
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page;
