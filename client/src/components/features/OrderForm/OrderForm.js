import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { InputGroup } from 'react-bootstrap';
import styles from './OrderForm.module.scss';

import Form from 'react-bootstrap/Form';
import Button from '../../common/Button/Button';

import { addOrderRequest } from '../../../redux/ordersRedux';
import { getCoursesIds, getTotalPrice } from '../../../redux/cartRedux';

const OrderForm = ({ days }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const arr = useSelector(getTotalPrice);
  const carsIds = useSelector(getCoursesIds);

  let totalCost = 0;
  arr.map((item) => {
    totalCost += item;
    return totalCost;
  });

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleForm = () => {
    dispatch(
      addOrderRequest({
        firstName,
        lastName,
        message,
        phone,
        email,
        totalCost,
        courseId: carsIds[0],
      }),
    );

    navigate('/order/sent');
  };

  return (
    <div className="container w-100 d-flex flex-column align-items-center justify-content-center">
      <form className={styles.form + ' col-10'}>
        <InputGroup className="flex-column">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              {...register('firstName', { required: true, minLength: 3 })}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First name"
            />
            {errors.firstName && (
              <small className="d-block form-text text-danger mt-2">
                This field is required ( minimum 3 characters )
              </small>
            )}
            <Form.Label> </Form.Label>
            <Form.Control className="mb-5"
              {...register('lastName', { required: true, minLength: 3 })}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <small className="d-block form-text text-danger mt-2">
                This field is required ( minimum 3 characters )
              </small>
            )}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Email address: </Form.Label>
            <Form.Control
              {...register('address', { required: true, minLength: 5 })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter full address"
            />
            {errors.address && (
              <small className="d-block form-text text-danger mt-2">
                This field is required ( minimum 5 characters )
              </small>
            )}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone: </Form.Label>
            <Form.Control
              {...register('phone', {
                required: true,
                maxLength: 9,
                minLength: 9,
              })}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Enter phone number"
            />
            {errors.phone && (
              <small className="d-block form-text text-danger mt-2">
                This field is required... Enter proper phone number.
              </small>
            )}
          </Form.Group>
          <br></br>
          <Form.Group className="mb-4" controlId="formBasicMessage">
            <Form.Label>Message: </Form.Label>
            <Form.Control
              className="w-100 mb-2"
              {...register('description', { required: false })}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="textarea"
              placeholder="Enter message"
              rows={4}
            />
            {errors.message && (
              <small className="d-block form-text text-danger mt-2">
                This field is required ( minimum 20 characters )
              </small>
            )}
          </Form.Group>
        </InputGroup>
      </form>
      <Button className="btn btn-primary" onClick={validate(handleForm)}>
        ORDER
      </Button>
    </div>
  );
};

export default OrderForm;