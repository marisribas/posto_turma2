package blockly;

import cronapi.*;
import cronapi.rest.security.CronappAudit;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronappAudit
@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Grafico {

public static final int TIMEOUT = 300;

/**
 *
 * @return Var
 */
// Grafico
public static Var popular() throws Exception {
 return new Callable<Var>() {

   private Var dados = Var.VAR_NULL;

   public Var call() throws Exception {
    dados = cronapi.database.Operations.query(Var.valueOf("app.entity.Abastecimento"),Var.valueOf("select a.posto.posto, SUM(a.valor)/SUM(a.km) from Abastecimento a  group by a.posto.posto"));
    cronapi.chart.Operations.createChart(Var.valueOf("chart-dados-servidor"), Var.valueOf("bar"), cronapi.database.Operations.getColumn(dados, Var.valueOf("this[0]")), Var.VAR_NULL, cronapi.chart.Operations.createChartSerie(Var.valueOf("Custo do Km"), cronapi.database.Operations.getColumn(dados, Var.valueOf("this[1]")), Var.VAR_NULL));
    return Var.VAR_NULL;
   }
 }.call();
}

}

