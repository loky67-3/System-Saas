import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const navigate = useNavigate()

  // LOGIN TEMPORAL (ENTRA DIRECTO)
  const handleLogin = () => {
    navigate('/dashboard')
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol xl={5} lg={6} md={8} sm={11}>
            <CCard className="shadow rounded-4 border">

              <CCardBody className="p-4 p-md-5">
                
                {/* LOGO */}
                <div className="text-center mb-4">
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      background: 'linear-gradient(135deg,#0d6efd,#0b5ed7)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 22,
                    }}
                  >
                    C
                  </div>
                  <h4 className="fw-bold mt-3 mb-1">Company Panel</h4>
                  <small className="text-body-secondary">
                    Acceso al sistema corporativo
                  </small>
                </div>

                <CForm>
                  <CInputGroup className="mb-3">
                    <CInputGroupText className="bg-light border">
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Correo o usuario"
                      autoComplete="username"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInputGroupText className="bg-light border">
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Contraseña"
                      autoComplete="current-password"
                    />
                  </CInputGroup>

                  <CButton
                    color="primary"
                    className="w-100 fw-semibold rounded-3 mb-3"
                    onClick={handleLogin}
                  >
                    Iniciar sesión
                  </CButton>

                  <div className="text-center">
                    <small className="text-body-secondary">
                      ¿No tienes cuenta?{' '}
                      <Link to="/register" className="text-decoration-none fw-semibold">
                        Regístrate
                      </Link>
                    </small>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>

            {/* MENSAJE SOLO MÓVIL */}
            <div className="text-center mt-3 d-block d-md-none">
              <small className="text-body-secondary">
                Sistema en mantenimiento. Algunas funciones pueden variar.
              </small>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login