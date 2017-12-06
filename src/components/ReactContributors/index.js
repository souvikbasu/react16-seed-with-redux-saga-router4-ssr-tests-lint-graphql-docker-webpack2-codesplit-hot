import React from 'react'
import { Link } from 'react-router-dom'

const ReactContributors = ({contributors, onFetchContributors}) => (
<div>
    <button onClick={onFetchContributors}>Get React Contributors</button>
    <div>
    {contributors ? (
    contributors.map(c => (
        <div key={c.id}>
        <Link to={`/contributors/${c.login}`}>
            {c.login}
        </Link>
        </div>
    ))
    ) : (
    <div>Loading...</div>
    )
    }
    </div>
</div>
);

export default ReactContributors;