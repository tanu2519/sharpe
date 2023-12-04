import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell } from 'recharts';
import { Table, Badge, Spinner } from 'react-bootstrap';
import '../App.css';

function Data() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      const userPosts = {};

      posts.forEach(post => {
        if (!userPosts[post.userId]) {
          userPosts[post.userId] = 1;
        } else {
          userPosts[post.userId]++;
        }
      });

      const userChartData = [];
      for (let i = 1; i <= 10; i++) {
        const count = userPosts[i] || 0;
        userChartData.push({ userId: i, postsCount: count });
      }

      setUserData(userChartData);
    }
  }, [posts]);

  const user1Posts = posts.filter(post => post.userId === 1);
  const totalUser1Posts = user1Posts.length;
  const totalOtherPosts = posts.length - totalUser1Posts;

  const data = [
    { name: 'User 1 Posts', value: totalUser1Posts },
    { name: 'Other Posts', value: totalOtherPosts },
  ];

  const COLORS = ['#0088FE', '#76e1cd'];

  return (
    <div className='container'>
      {loading ? (
        <Spinner animation="border" />
      ) : error ? (
        <h6>{error}</h6>
      ) : (
        <div>
          <div className='sec1'>
            <h2>Filtered Posts Data</h2>
            <section>
              <PieChart width={400} height={400} className='us1'>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <div className='textDefine'>
                <span> <Badge bg="primary">10%</Badge>user id 1</span>
                <span><Badge bg="info">90%</Badge>other user</span>
              </div>
            </section>
          </div>
          <div className='sec2'>
            <h3>Description</h3>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>UID</th>
                  <th>Title</th>
                  <th>Body</th>

                </tr>
              </thead>
              <tbody>
                {user1Posts.map(post => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Data;
