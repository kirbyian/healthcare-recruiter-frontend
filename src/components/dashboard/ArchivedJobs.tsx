import React, { useState, useEffect } from 'react';
import { MaterialReactTable, useMaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import './Dashboard.css';

interface Job {
  id: number;
  jobReference: string;
  hospital: string;
  department: string;
  position: string;
  duration: string;
  contact: string;
  deadline: string;
  link: string;
}

const url = process.env.REACT_APP_HCR_URL || ''+'/jobs?isArchived=true';

const ArchivedJobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetchJobsData();
  }, []);

  const fetchJobsData = async () => {
    try {
      const response = await fetch(url+'/jobs?isArchived=true');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs data:', error);
    }
  };


  const columns: MRT_ColumnDef<Job>[] = [
    {
      accessorKey: 'hospital',
      header: 'Hospital',
    },
    {
      accessorKey: 'department',
      header: 'Department',
    },
    {
      accessorKey: 'position',
      header: 'Position',
    },
    {
      accessorKey: 'duration',
      header: 'Duration',
    },
    {
      accessorKey: 'contact',
      header: 'Contact',
    },
    {
      accessorKey: 'deadline',
      header: 'Deadline',
    },
    {
      accessorKey: 'link',
      header: 'Link',
      Cell: ({ cell }) => {
        const linkValue = cell.getValue() as string | undefined; // Explicitly cast to string | undefined
        return (
          <a href={linkValue} target="_blank" rel="noopener noreferrer">
            {linkValue}
          </a>
        );
      },
    }
  ];
  

  const table = useMaterialReactTable({
    columns,
    data: jobs,
    initialState: { showColumnFilters: true },
  });

  return (
    <div className="container">
      <div style={{ overflowX: 'auto' }} className="table-container">
        <h4>Total Archived Records: {jobs.length}</h4>
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default ArchivedJobs;
