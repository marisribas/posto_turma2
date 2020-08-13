package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Posto {

public static final int TIMEOUT = 300;

/**
 *
 * @param Entidade
 * @return Var
 */
// Posto
public static Var depoisInserir(Var Entidade) throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    System.out.println(Var.valueOf("Passou pelo meu bloco").getObjectAsString());
    System.out.println(Entidade.getObjectAsString());
    cronapi.database.Operations.insert(Var.valueOf("app.entity.Noticia"),Var.valueOf("texto",Var.valueOf(Var.valueOf("Foi criado um novo posto: ").toString() + cronapi.object.Operations.getObjectField(Entidade, Var.valueOf("posto")).toString())));
    return Var.VAR_NULL;
   }
 }.call();
}

/**
 *
 * @return Var
 */
// Descreva esta função...
public static Var listaMenorCusto() throws Exception {
 return new Callable<Var>() {

   private Var dados = Var.VAR_NULL;
   private Var listaRet = Var.VAR_NULL;
   private Var i = Var.VAR_NULL;
   private Var i_start = Var.VAR_NULL;
   private Var i_end = Var.VAR_NULL;
   private Var i_inc = Var.VAR_NULL;

   public Var call() throws Exception {
    dados = cronapi.database.Operations.query(Var.valueOf("app.entity.Abastecimento"),Var.valueOf("select a.posto.posto, a.posto.latitude, a.posto.longitude, SUM(a.valor)/SUM(a.km) from Abastecimento a  group by a.posto.posto, a.posto.latitude, a.posto.longitude"));
    listaRet = cronapi.list.Operations.newList();
    i_start = Var.valueOf(1);
    i_end = Var.valueOf(3);
    i_inc = Var.valueOf(1);
    if (i_start.greaterThan(i_end)) {
        i_inc.multiply(-1);
    }
    for (i = Var.valueOf(i_start);
        i_inc.getObjectAsInt() >= 0 ? i.getObjectAsLong() <= i_end.getObjectAsLong() : i.getObjectAsLong()  >= i_end.getObjectAsLong();
    i.inc(i_inc))  {
        if (cronapi.database.Operations.hasElement(dados).getObjectAsBoolean()) {
            cronapi.list.Operations.addLast(listaRet,cronapi.map.Operations.createObjectMapWith(Var.valueOf("posto",cronapi.database.Operations.getField(dados, Var.valueOf("this[0]"))) , Var.valueOf("latitude",cronapi.database.Operations.getField(dados, Var.valueOf("this[1]"))) , Var.valueOf("longitude",cronapi.database.Operations.getField(dados, Var.valueOf("this[2]"))) , Var.valueOf("custokm",cronapi.database.Operations.getField(dados, Var.valueOf("this[3]")))));
            cronapi.database.Operations.next(dados);
        }
    } // end for
    System.out.println(listaRet.getObjectAsString());
    return listaRet;
   }
 }.call();
}

}

