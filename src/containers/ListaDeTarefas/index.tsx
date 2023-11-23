import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
      </p>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
