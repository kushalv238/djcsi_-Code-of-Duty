import Employee from './Employee'

import '../stylesheets/employee.css'

const Employees = () => {
	return (
		<div className='grid-center'>
            <div className="products-wrapper">
				<Employee img="/images/cup.png"/>
				<Employee img="/images/cup.png"/>
				<Employee img="/images/cup.png"/>
				<Employee img="/images/cup.png"/>
				<Employee img="/images/cup.png"/>
				<Employee img="/images/cup.png"/>
            </div>
        </div>
	)
}

export default Employees