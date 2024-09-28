<script setup lang="ts">
import { ref } from 'vue'
import JobCard from '../ui/JobCard.vue'

const jobs = [
  {
    id: '1',
    title: 'Software Engineer',
    company: {
      name: 'Tech Solutions Inc.',
      avatar: 'https://placeholder.co/100x100?text=Tech+Solutions+Inc.'
    },
    type: 'Full-time',
    location: 'San Francisco, CA',
    postedAt: '2024-09-12',
    salary: '$80,000 - $100,000',
    description:
      'Join our team as a Software Engineer and work on cutting-edge projects. Experience with React and Node.js is required.'
  },
  {
    id: '2',
    title: 'Product Manager',
    company: {
      name: 'Innovatech Ltd.',
      avatar: 'https://placeholder.co/100x100?text=Innovatech+Ltd.'
    },
    type: 'Full-time',
    location: 'New York, NY',
    postedAt: '2024-09-10',
    salary: '$90,000 - $120,000',
    description:
      'We are looking for a Product Manager to lead product development initiatives. Experience in agile methodologies is a plus.'
  },
  {
    id: '3',
    title: 'UX Designer',
    company: {
      name: 'Creative Designs Co.',
      avatar: 'https://placeholder.co/100x100?text=Creative+Designs+Co.'
    },
    type: 'Part-time',
    location: 'Remote',
    postedAt: '2024-09-08',
    salary: '$60,000 - $80,000',
    description:
      'Seeking a UX Designer to create user-friendly interfaces. Strong portfolio and experience with Figma are required.'
  },
  {
    id: '4',
    title: 'Marketing Specialist',
    company: {
      name: 'Growth Partners',
      avatar: 'https://placeholder.co/100x100?text=Growth+Partners'
    },
    type: 'Contract',
    location: 'Chicago, IL',
    postedAt: '2024-09-05',
    salary: '$70,000 - $90,000',
    description:
      'Looking for a Marketing Specialist to develop and execute marketing strategies. Experience with digital marketing tools preferred.'
  },
  {
    id: '5',
    title: 'Data Scientist',
    company: {
      name: 'Analytics Hub',
      avatar: 'https://placeholder.co/100x100?text=Analytics+Hub'
    },
    type: 'Full-time',
    location: 'Boston, MA',
    postedAt: '2024-09-03',
    salary: '$100,000 - $130,000',
    description:
      'Join our team as a Data Scientist and analyze complex datasets. Proficiency in Python and machine learning is essential.'
  }
]

const jobData = ref(jobs)
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <!-- Job Card -->
    <JobCard v-for="job in jobData" :key="job.id" :job="job" />
  </div>
</template>
