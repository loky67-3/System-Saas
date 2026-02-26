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
import { cilLockLocked, cilUser, cilEnvelopeClosed } from '@coreui/icons'

const Register = () => {
  const navigate = useNavigate()

  // REGISTRO TEMPORAL (ENTRA DIRECTO AL LOGIN O DASHBOARD SI QUIERES)
  const handleRegister = () => {
    navigate('/login') // puedes cambiar a '/dashboard' si quieres
  }

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* OVERLAY */}
      <div
        className="w-100 min-vh-100 d-flex align-items-center"
        style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
      >
        <CContainer>
          <CRow className="justify-content-center">
            <CCol xl={5} lg={6} md={8} sm={11}>
              <CCard className="shadow rounded-4 border">
                <CCardBody className="p-4 p-md-5">

                  {/* LOGO / BRAND */}
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
                    <h4 className="fw-bold mt-3 mb-1">Company</h4>
                    <small className="text-body-secondary">
                      Crea tu cuenta corporativa
                    </small>
                  </div>

                  <CForm>
                    <CInputGroup className="mb-3">
                      <CInputGroupText className="bg-light border">
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Usuario" autoComplete="username" />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText className="bg-light border">
                        <CIcon icon={cilEnvelopeClosed} />
                      </CInputGroupText>
                      <CFormInput placeholder="Correo electrónico" autoComplete="email" />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText className="bg-light border">
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="new-password"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupText className="bg-light border">
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Confirmar contraseña"
                        autoComplete="new-password"
                      />
                    </CInputGroup>

                    <CButton
                      color="primary"
                      className="w-100 fw-semibold rounded-3 mb-3"
                      onClick={handleRegister}
                    >
                      Crear cuenta
                    </CButton>

                    {/* LINK LOGIN */}
                    <div className="text-center">
                      <small className="text-body-secondary">
                        ¿Ya tienes cuenta?{' '}
                        <Link
                          to="/login"
                          className="text-decoration-none fw-semibold"
                        >
                          Inicia sesión
                        </Link>
                      </small>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>

              {/* TEXTO SOLO EN MÓVIL */}
              <div className="text-center mt-3 d-block d-md-none">
                <small className="text-light opacity-75">
                  Plataforma corporativa segura
                </small>
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </div>
  )
}

export default Register