import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className='bg-gray-900 text-white'>
      {/* Hero Section */}
      <section className='relative h-[calc(100vh-5rem)] flex items-center justify-center text-center'>
        <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
        <img
          src='https://storage.googleapis.com/dala-staging-public-data-storage/generated-images/e73210d6-e5cd-4f5e-8a38-89f099ed2862/hero-image-wzdhuc6-1762839412565.webp'
          alt='Jollof Rice with Chicken'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='relative z-20 px-4'
        >
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4'>
            Savor the Taste of Africa
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8'>
            Experience the rich and diverse flavors of authentic African cuisine at Karibu Bites. A culinary journey awaits you.
          </p>
          <div className='flex justify-center gap-4'>
            <Button asChild size='lg' className='bg-orange-500 hover:bg-orange-600 text-white'>
              <Link to='/menu'>
                View Menu <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <Button asChild size='lg' variant='outline' className='border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>
              <Link to='/reservations'>Book a Table</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Placeholder sections */}
      <div className='py-20 text-center text-gray-400'>More sections coming soon...</div>
    </div>
  );
};

export default HomePage;