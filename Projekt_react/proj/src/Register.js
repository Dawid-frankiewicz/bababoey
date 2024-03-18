import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="form">
      <h3>Rejestracja</h3>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          const url = "/api/register.php"; // Adres Twojego endpointa API rejestracji
          const headers = {
            "Content-Type": "application/json"
          };
          const data = {
            user: values.email, // Zmienione na 'email' zgodnie z Twoim formularzem
            pass: values.password,
          };

          try {
            const response = await fetch(url, {
              method: "POST",
              headers: headers,
              body: JSON.stringify(data)
            });

            if (response.ok) {
              navigate('/'); // Przekierowanie do strony logowania
            } else {
              const errorText = await response.text();
              setErrors({ submit: errorText });
            }
          } catch (error) {
            setErrors({ submit: "Błąd: " + error.message });
          }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            <Field type="password" name="password" placeholder="Hasło" />
            <button type="submit" disabled={isSubmitting}>Zarejestruj</button>
            {errors.submit && <div>{errors.submit}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;