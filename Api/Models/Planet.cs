using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models
{
    public class Planet
    {
        [Key]
        public int Id { get; set; }

        public int StarSystemId { get; set; }
        public int EnvironmentTypeId { get; set; }

        [ForeignKey("StarSystemId")]
        public StarSystem StarSystem { get; set; }

        [ForeignKey("EnvironmentTypeId")]
        public EnvironmentType EnvironmentType { get; set; }
    }
}