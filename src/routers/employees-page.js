import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundary from '../components/common/error-boundary';
import PageTitle from '../components/common/page-title';
import ContentRow from '../components/common/content-row';
import EmployeesList from '../components/employees/employees-list';
import EmployeeDetails from '../components/employees/employee-details';
import DummyBlock from '../components/common/dummy-block';

const EmployeesPage = ({ history, match }) => {
    const { id } = match.params;

    return (
        <>
            <PageTitle title="Employees" />
            <ErrorBoundary>
                <ContentRow
                    leftColumn={(
                        <EmployeesList
                            onItemSelected={(id) => history.push(`${id}`)}
                            activeEmployee={id}
                        />
                    )}
                    rightColumn={
                        typeof id === 'undefined'
                            ? <DummyBlock content="Select an employee from a list" />
                            : <EmployeeDetails fetchAttr={id} />
                    } />
            </ErrorBoundary>
        </>
    );
}

export default withRouter(EmployeesPage);