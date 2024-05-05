import { Container } from './styles'

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container >
  )
}

// ou usar dessa forma desestruturada:
// export function Button(props) {

//   return (
//     <Container type="button">
//       {props.title}
//     </Container>
//   );
// }