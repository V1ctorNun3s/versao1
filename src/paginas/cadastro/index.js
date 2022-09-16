import { Text,View,} from "react-native";
import './styles.css';

export default function Cadastrar(){

    return(

        <View>

            <Text>CADASTRAR </Text>
            <div className="form">
            <form>
                <label>
                     Nome:
                     {'\n'}
                    <input className="input" type="text" name="name" />
                </label>
                <br />
                <label>
                    Idade:
                    {'\n'}
                    <input className="input" type="number" idade="idade" />
                </label>
                <br />
                <label>
                    Nota 1:
                    {'\n'}
                    <input className="input" type="number" nota="nota1" />
                </label>
                <br />
                <label>
                    Nota 2:
                    {'\n'}
                    <input className="input" type="number" nota="nota2" />
                </label>
                <br />
                <label>
                    Nota 3:
                    {'\n'}
                    <input className="input" type="number" nota="nota3" />
                </label>
                <br />
                <label>
                    Imagem:
                    {'\n'}
                    <input className="input" type="image" imagem="img" />
                </label>
                <br />
                <input className="input" type="submit" value="Enviar" />
                </form>
            </div>
        </View>





);

}

