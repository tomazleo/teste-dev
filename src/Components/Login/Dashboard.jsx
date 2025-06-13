import React from 'react'
import Logo from "../../assets/Frame.png"
import User from "../../assets/Frame 43.png"
import { FaUsers, FaSignOutAlt, FaUserEdit, FaTrophy, FaClipboardList } from 'react-icons/fa';
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <nav>
       <div>
  <img src={Logo} alt='Logo' className='logo-dashboard' />
  <p className='p-menu'>Menu</p>

  <ul className='nav-list'>
    <li className='nav-item'>
      <FaTrophy className='menu-icon' />
      <span>Dashboard</span>
    </li>
    <li className='nav-item'>
      <FaClipboardList className='menu-icon' />
      <span>Eventos</span>
    </li>
    <li className='nav-item'>
      <FaUsers className='menu-icon' />
      <span>Equipes</span>
    </li>
    <li className='nav-item'>
      <FaClipboardList className='menu-icon' />
      <span>Inscrições</span>
    </li>
  </ul>
</div>

        <div className='footer'>
          <img src={User} alt='foto do usuario' className='foto-user'></img>
          
          <button>Alterar Dados</button>
          <button>Sair</button>
        </div>
      </nav>
      <main className="main-dashboard">
  <p className="welcome">Bem-vindo de Volta, <span>Kaique Steck</span></p>
  <h2 className="section-title">Todos Eventos</h2>

  <div className="card">
    <div className="card-header">
      <input className="search-input" placeholder="Pesquisar" />
      <button className="add-button">+ Inserir Novo</button>
    </div>

    <div className="table-responsive">
      <table className="event-table">
        <thead>
          <tr>
            <th>Nome do evento</th>
            <th>Total de equipes</th>
            <th>Status</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Clube de Laço Coração Pantaneiro</td>
            <td>10</td>
            <td className="status-active">ativo</td>
            <td>09 a 11 de Junho</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Clube de Laço Coração Pantaneiro</td>
            <td>10</td>
            <td className="status-active">ativo</td>
            <td>09 a 11 de Junho</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="pagination">
      <button>Anterior</button>
      <button className="active">1</button>
      <button>2</button>
      <button>3</button>
      <button>Próximo</button>
    </div>
  </div>
</main>

    </div>
  )
}

export default Dashboard
