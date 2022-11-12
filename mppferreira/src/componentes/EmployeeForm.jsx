import React from 'react'
import { useState } from 'react'
import Card from '../componentes/shared/Card'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';

function EmployeeForm({handleAdd}) {

    const [texto , setTexto ] = useState('');
    const [ativo, setAtivo] = useState(true);
    const [aviso, setAviso] = useState('');
    const [pontuacao, setPontuacao] = useState('');

    const handleTexto = (e) => {
        if(e.target.value === '') {
            setAtivo(true)
            setAviso('');
        } else if((e.target.value).trim().length < 10 ){
            setAviso('O texto deve ter mais de 10 caracteres')
            setAtivo(true);
        }else{
            setAtivo();
            setAtivo(false);
        }
        setTexto(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(texto.trim().length > 10 ){
            const newEmployee = {
                texto: texto,
                pontuacao: pontuacao
            }

            handleAdd(newEmployee);
            setTexto('');
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2> Como classificaria o serviço ? </h2>
            <RatingSelect select={(pontuacao)=> setPontuacao(pontuacao)}/>
            <div className="input-group">
                <input onChange={handleTexto} type="text" placeholder='Escreva a sua opinião' />
                <Button type='submit' isDisable={ativo}>Enviar</Button>
            </div>
            {aviso && <div className='message'> {aviso} </div>}
        </form>
    </Card>
  )
}

export default EmployeeForm